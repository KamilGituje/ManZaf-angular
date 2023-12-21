import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Leave } from "../models/leave";
import { environment } from "src/environments/environment";
import { ApiPaths } from "src/environments/api-paths";

@Injectable({
    providedIn: "root"
})

export class LeaveService{
    constructor(private http: HttpClient){}

    private baseUrl = environment.baseUrl

    getAvailableLeaves(workerId: number) : Observable<Leave[]>{
        return this.http.get<Leave[]>(`${this.baseUrl}/${ApiPaths.leaves}/${workerId}`)
    }
}