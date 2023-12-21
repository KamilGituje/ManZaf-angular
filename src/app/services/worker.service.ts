import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Worker } from "../models/worker";
import { environment } from "src/environments/environment";
import { ApiPaths } from "src/environments/api-paths";

@Injectable({
    providedIn: "root"
})
export class WorkerService {
    constructor(private http: HttpClient) { }

    private baseUrl = environment.baseUrl;
    workerId = 18;

    getWorker(workerId: number): Observable<Worker> {
        return this.http.get<Worker>(`${this.baseUrl}/${ApiPaths.workers}/${workerId}`);
    }
    getWorkerWithSubordinates(workerId: number): Observable<Worker> {
        return this.http.get<Worker>(`${this.baseUrl}/${ApiPaths.workers}/${workerId}/subordinates`)
    }
}