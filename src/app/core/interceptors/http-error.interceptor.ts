import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, retry, throwError, timeout } from 'rxjs';
import { environment } from '../../../environments/environment';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        timeout(environment.httpTimeout),
        retry({
            count: environment.enableRetry ? environment.maxRetries : 0,
            delay: (error, retryCount) => {
                if (error instanceof HttpErrorResponse) {
                    // Retry only on network errors or 5xx server errors
                    if (error.status === 0 || error.status >= 500) {
                        return new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
                    }
                }
                throw error;
            }
        }),
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'حدث خطأ، الرجاء المحاولة مرة أخرى';

            if (error.status === 0) {
                errorMessage = 'فشل الاتصال بالخادم';
            } else if (error.status === 401) {
                errorMessage = 'غير مصرح';
            } else if (error.status === 404) {
                errorMessage = 'الخدمة غير متوفرة';
            } else if (error.status >= 500) {
                errorMessage = 'خطأ في الخادم';
            }

            return throwError(() => ({
                status: error.status,
                message: errorMessage,
                originalError: error
            }));
        })
    );
};
