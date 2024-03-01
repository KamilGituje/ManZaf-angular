import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SingleLeave } from "../models/single-leave";
import { ApiPaths } from "src/environments/api-paths";
import { environment } from "src/environments/environment";
import { SingleLeaveForCreation } from "../models/single-leave-for-creation";
import { Observable } from "rxjs";
import { SingleLeaveStatus } from "../models/single-leave-status";
import { SingleLeaveForStatusUpdate } from "../models/single-leave-for-status-update";

@Injectable({
    providedIn: "root"
})

export class SingleLeaveService {
    constructor(private http: HttpClient) { }

    private baseUrl = environment.baseUrl;

    addSingleLeave(singleLeave: SingleLeaveForCreation, workerId: number): Observable<SingleLeave> {
        return this.http.post<SingleLeave>(`${this.baseUrl}/${ApiPaths.singleLeaves}/workers/${workerId}/create`, singleLeave);
    }
    getSingleLeaves(workerId: number): Observable<SingleLeave[]> {
        return this.http.get<SingleLeave[]>(`${this.baseUrl}/${ApiPaths.singleLeaves}/workers/${workerId}`);
    }
    getSingleLeavesByManagerId(managerId: number, unmanaged: boolean): Observable<SingleLeave[]>{
        return this.http.get<SingleLeave[]>(`${this.baseUrl}/${ApiPaths.singleLeaves}/managers/${managerId}?unmanaged=${unmanaged}`);
    }
    updateSingleLeaveStatus(singleLeave: SingleLeaveForStatusUpdate): Observable<SingleLeave>{
        return this.http.put<SingleLeave>(`${this.baseUrl}/${ApiPaths.singleLeaves}/${singleLeave.singleLeaveId}/update`, singleLeave.status);
    }
}