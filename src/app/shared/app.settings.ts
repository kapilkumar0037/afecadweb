export class AppSettings {

    //controllers
    public static Studentcontroller = "Student";
    public static AdminController = "Admin";
    public static SetupController = "Setup";
   
    //Methods
    public static SaveStudentDetails = "SaveStudentDetails";
    public static getCourses = "GetAllCourses";
    public static AddCourse = "AddCourse";
    public static saveCourses = "saveCourses";
    public static getCountries = "getCountries";
    public static UploadFiles = "UploadFiles";
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
