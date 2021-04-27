import { Injectable } from "@angular/core";

const tasks = [{
    "Task_ID": 1,
    "Task_Assigned_Employee_ID": 1,
    "Task_Owner_ID": 1,
    "Task_Subject": "Plans 2015",
    "Task_Start_Date": "2015-01-01T00:00:00",
    "Task_Due_Date": "2015-04-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 2,
    "Task_Assigned_Employee_ID": 2,
    "Task_Owner_ID": 1,
    "Task_Subject": "Health Insurance",
    "Task_Start_Date": "2015-02-12T00:00:00",
    "Task_Due_Date": "2015-05-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 3,
    "Task_Assigned_Employee_ID": 4,
    "Task_Owner_ID": 4,
    "Task_Subject": "New Brochures",
    "Task_Start_Date": "2015-02-17T00:00:00",
    "Task_Due_Date": "2015-03-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 4,
    "Task_Assigned_Employee_ID": 31,
    "Task_Owner_ID": 33,
    "Task_Subject": "Training",
    "Task_Start_Date": "2015-03-02T00:00:00",
    "Task_Due_Date": "2015-06-29T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 5,
    "Task_Assigned_Employee_ID": 5,
    "Task_Owner_ID": 5,
    "Task_Subject": "NDA",
    "Task_Start_Date": "2015-03-12T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 6,
    "Task_Assigned_Employee_ID": 7,
    "Task_Owner_ID": 1,
    "Task_Subject": "Revenue Projections",
    "Task_Start_Date": "2015-03-24T00:00:00",
    "Task_Due_Date": "2015-04-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 7,
    "Task_Assigned_Employee_ID": 9,
    "Task_Owner_ID": 9,
    "Task_Subject": "TV Recall",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2016-02-04T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 8,
    "Task_Assigned_Employee_ID": 6,
    "Task_Owner_ID": 5,
    "Task_Subject": "Overtime",
    "Task_Start_Date": "2015-06-10T00:00:00",
    "Task_Due_Date": "2015-06-20T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 9,
    "Task_Assigned_Employee_ID": 8,
    "Task_Owner_ID": 12,
    "Task_Subject": "Recall and Refund Forms",
    "Task_Start_Date": "2015-06-17T00:00:00",
    "Task_Due_Date": "2016-04-09T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 10,
    "Task_Assigned_Employee_ID": 10,
    "Task_Owner_ID": 8,
    "Task_Subject": "Shippers",
    "Task_Start_Date": "2015-07-10T00:00:00",
    "Task_Due_Date": "2016-04-11T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 11,
    "Task_Assigned_Employee_ID": 6,
    "Task_Owner_ID": 22,
    "Task_Subject": "Hardware Upgrade",
    "Task_Start_Date": "2015-07-22T00:00:00",
    "Task_Due_Date": "2016-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 95,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 12,
    "Task_Assigned_Employee_ID": 6,
    "Task_Owner_ID": 24,
    "Task_Subject": "Touch-Enabled Apps",
    "Task_Start_Date": "2015-08-05T00:00:00",
    "Task_Due_Date": "2016-04-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 13,
    "Task_Assigned_Employee_ID": 6,
    "Task_Owner_ID": 6,
    "Task_Subject": "Online Sales",
    "Task_Start_Date": "2015-08-20T00:00:00",
    "Task_Due_Date": "2015-09-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 14,
    "Task_Assigned_Employee_ID": 6,
    "Task_Owner_ID": 8,
    "Task_Subject": "New Website Design",
    "Task_Start_Date": "2015-09-17T00:00:00",
    "Task_Due_Date": "2015-11-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 15,
    "Task_Assigned_Employee_ID": 6,
    "Task_Owner_ID": 22,
    "Task_Subject": "Bandwidth Increase",
    "Task_Start_Date": "2015-11-01T00:00:00",
    "Task_Due_Date": "2015-11-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 16,
    "Task_Assigned_Employee_ID": 18,
    "Task_Owner_ID": 9,
    "Task_Subject": "Support",
    "Task_Start_Date": "2015-11-10T00:00:00",
    "Task_Due_Date": "2015-11-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 17,
    "Task_Assigned_Employee_ID": 31,
    "Task_Owner_ID": 31,
    "Task_Subject": "Training Material",
    "Task_Start_Date": "2015-11-14T00:00:00",
    "Task_Due_Date": "2016-02-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 18,
    "Task_Assigned_Employee_ID": 22,
    "Task_Owner_ID": 3,
    "Task_Subject": "New Database",
    "Task_Start_Date": "2015-12-24T00:00:00",
    "Task_Due_Date": "2015-12-29T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 95,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 19,
    "Task_Assigned_Employee_ID": 32,
    "Task_Owner_ID": 3,
    "Task_Subject": "New HDMI Specification",
    "Task_Start_Date": "2016-01-02T00:00:00",
    "Task_Due_Date": "2016-01-31T00:00:00",
    "Task_Status": "Deferred",
    "Task_Priority": 2,
    "Task_Completion": 50,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 20,
    "Task_Assigned_Employee_ID": 3,
    "Task_Owner_ID": 3,
    "Task_Subject": "Automation Server",
    "Task_Start_Date": "2016-01-15T00:00:00",
    "Task_Due_Date": "2016-04-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 85,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 21,
    "Task_Assigned_Employee_ID": 40,
    "Task_Owner_ID": 8,
    "Task_Subject": "Retail Sales",
    "Task_Start_Date": "2016-01-20T00:00:00",
    "Task_Due_Date": "2016-02-10T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 22,
    "Task_Assigned_Employee_ID": 1,
    "Task_Owner_ID": 1,
    "Task_Subject": "Reports",
    "Task_Start_Date": "2016-03-13T00:00:00",
    "Task_Due_Date": "2016-05-07T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 50,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 23,
    "Task_Assigned_Employee_ID": 5,
    "Task_Owner_ID": 1,
    "Task_Subject": "Budget",
    "Task_Start_Date": "2016-03-20T00:00:00",
    "Task_Due_Date": "2016-04-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 30,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 24,
    "Task_Assigned_Employee_ID": 13,
    "Task_Owner_ID": 10,
    "Task_Subject": "Shipping Labels",
    "Task_Start_Date": "2016-04-01T00:00:00",
    "Task_Due_Date": "2016-04-15T00:00:00",
    "Task_Status": "To do this week",
    "Task_Priority": 2,
    "Task_Completion": 50,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 25,
    "Task_Assigned_Employee_ID": 10,
    "Task_Owner_ID": 10,
    "Task_Subject": "New Warehouse",
    "Task_Start_Date": "2016-04-05T00:00:00",
    "Task_Due_Date": "2016-04-15T00:00:00",
    "Task_Status": "Unplanned",
    "Task_Priority": 2,
    "Task_Completion": 65,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 26,
    "Task_Assigned_Employee_ID": 10,
    "Task_Owner_ID": 10,
    "Task_Subject": "Forklift",
    "Task_Start_Date": "2016-04-07T00:00:00",
    "Task_Due_Date": "2016-04-20T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 20,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 27,
    "Task_Assigned_Employee_ID": 1,
    "Task_Owner_ID": 30,
    "Task_Subject": "Customer Follow Up Plan",
    "Task_Start_Date": "2016-05-05T00:00:00",
    "Task_Due_Date": "2016-05-11T00:00:00",
    "Task_Status": "Due next week",
    "Task_Priority": 2,
    "Task_Completion": 40,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 28,
    "Task_Assigned_Employee_ID": 7,
    "Task_Owner_ID": 1,
    "Task_Subject": "Prepare 2015 Financial",
    "Task_Start_Date": "2015-01-15T00:00:00",
    "Task_Due_Date": "2015-01-31T00:00:00",
    "Task_Status": "Due this week",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 29,
    "Task_Assigned_Employee_ID": 4,
    "Task_Owner_ID": 1,
    "Task_Subject": "Prepare 2015 Marketing Plan",
    "Task_Start_Date": "2015-01-01T00:00:00",
    "Task_Due_Date": "2015-01-31T00:00:00",
    "Task_Status": "No deadline",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 30,
    "Task_Assigned_Employee_ID": 2,
    "Task_Owner_ID": 1,
    "Task_Subject": "Review Health Insurance Options Under the Affordable Care Act",
    "Task_Start_Date": "2015-02-12T00:00:00",
    "Task_Due_Date": "2015-04-25T00:00:00",
    "Task_Status": "Overdue",
    "Task_Priority": 4,
    "Task_Completion": 50,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 31,
    "Task_Assigned_Employee_ID": 1,
    "Task_Owner_ID": 2,
    "Task_Subject": "Choose between PPO and HMO Health Plan",
    "Task_Start_Date": "2015-02-15T00:00:00",
    "Task_Due_Date": "2015-04-15T00:00:00",
    "Task_Status": "Due today",
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 2
}];

const employees = [{
    "ID": 1,
    "Name": "John Heart"
}, {
    "ID": 2,
    "Name": "Samantha Bright"
}, {
    "ID": 3,
    "Name": "Arthur Miller"
}, {
    "ID": 4,
    "Name": "Robert Reagan"
}, {
    "ID": 5,
    "Name": "Greta Sims"
}, {
    "ID": 6,
    "Name": "Brett Wade"
}, {
    "ID": 7,
    "Name": "Sandra Johnson"
}, {
    "ID": 8,
    "Name": "Ed Holmes"
}];

@Injectable()
export class DeadLineService {
    getTasks() {
        return tasks;
    }
    getEmployees() {
        return employees;
    }
}
