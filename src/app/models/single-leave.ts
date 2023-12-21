import { Leave } from "./leave";
import { LeaveType } from "./leave-type";
import { SingleLeaveStatus } from "./single-leave-status";
import { Worker } from "./worker";

export class SingleLeave {
    singleLeaveId: number;
    leave: Leave;
    leaveType: LeaveType;
    worker: Worker;
    startDate: Date;
    endDate: Date;
    status: SingleLeaveStatus;
}