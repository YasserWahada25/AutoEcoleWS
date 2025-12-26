import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, timeout } from 'rxjs';

export interface ReservationResponse {
    success: boolean;
    message?: string;
    error?: string;
}

@Injectable({ providedIn: 'root' })
export class ReservationService {
    // ✅ Ton Web App URL (/exec)
    private apiUrl =
        'https://script.google.com/macros/s/AKfycbyOPvc12RGyxBzIB8uKusjf_9Pb_axuKY1h4daHaDta_YF69SvZOJI9iNLMH8RDub7sWQ/exec';

    constructor(private http: HttpClient) { }

    /**
     * Envoie les données au Google Apps Script.
     * On utilise x-www-form-urlencoded (le plus compatible) pour éviter le preflight CORS.
     */
    sendReservation(payload: {
        fullName: string;
        email: string;
        phone: string;
        message?: string;
        source?: string;
        userAgent?: string;
    }): Observable<ReservationResponse> {
        // ✅ IMPORTANT : pas de headers custom → évite de déclencher OPTIONS (preflight)
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
                responseType: 'text', // Apps Script renvoie parfois du texte -> on parse
            })
            .pipe(
                timeout(10000),
                map((text) => {
                    // 🔎 Essayer de parser JSON
                    try {
                        const json = JSON.parse(text || '{}');
                        return {
                            success: !!json.success,
                            message: json.message,
                            error: json.error,
                        } as ReservationResponse;
                    } catch {
                        // Si réponse non JSON mais requête OK -> on considère succès "optimiste"
                        // (si tu veux être strict, mets success:false ici)
                        return { success: true, message: 'Saved (non-JSON response)' };
                    }
                }),
                catchError((err: HttpErrorResponse) => {
                    // Cas fréquent : status 0 (CORS / réseau)
                    // On retourne un message propre pour ton UI
                    console.error('ReservationService error:', err);
                    return of({
                        success: false,
                        message: 'Request failed (CORS or network)',
                        error: err.message,
                    } as ReservationResponse);
                })
            );
    }
}
