export class AppSettings {

    //controllers
    public static Studentcontroller = "Student";
   
    //Methods
    public static SaveStudentDetails = "SaveStudentDetails";
    public static getCourses = "fetchCourses";
}
export class SessionVariables {
    public static CurrentUser = "currentUser";
    public static EmpId="UID";
    public static ResetId="Reset";
    public static LoginType="LT";
}
export class RequestType {
    public static POST = "POST";
    public static GET = "GET";
}
export class ResultStatus {
    public static FAILURE = "Failure";
    public static SUCCESS = "Sucess";
}
export enum EnvironmentTypes {
    DEV = 1,
    QA = 2,
    QC = 3,
    PROD = 4
}
