import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ReservationResponse {
    success: boolean;
    message?: string;
    error?: string;
}

@Injectable({ providedIn: 'root' })
export class ReservationService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    sendReservation(payload: {
        fullName: string;
        email: string;
        phone: string;
        message?: string;
        source?: string;
        userAgent?: string;
    }): Observable<ReservationResponse> {
        const body = new HttpParams({
            fromObject: {
                fullName: payload.fullName ?? '',
                email: payload.email ?? '',
                phone: payload.phone ?? '',
                message: payload.message ?? '',
                source: payload.source ?? 'Website Home Contact',
                userAgent: payload.userAgent ?? 'Unknown',
            },
        }).toString();

        return this.http
            .post(this.apiUrl, body, {
                responseType: 'text',
            })
            .pipe(
                map((text) => {
                    try {
                        const json = JSON.parse(text || '{}');
                        return {
                            success: !!json.success,
                            message: json.message,
                            error: json.error,
                        } as ReservationResponse;
                    } catch {
                        return {
                            success: false,
                            error: 'Invalid response format'
                        };
                    }
                })
            );
    }
}
