import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    console.log("http request happen");
    return next(req).pipe(
        tap((res)=>{
            console.log(res.type);
            console.log(res.type == HttpEventType.Response);
            if(res.type == HttpEventType.Response){
                console.log("response aaya h ",res.status);
            }
        })
    )
}