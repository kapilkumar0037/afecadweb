import { EnvironmentTypes } from './app.settings';
import { Global } from './global';

export class AppConfig {
    public static Environment=EnvironmentTypes.DEV; 
    
    public Server = "http://localhost:56308/";
    public ApiUrl = "api/";
    public PostApiUrl = "PORTALAPI";
    public LoginUrl = "token";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ServerWithLoginUrl = this.Server + this.LoginUrl;
    
}