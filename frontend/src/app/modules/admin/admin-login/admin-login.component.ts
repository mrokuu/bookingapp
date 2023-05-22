import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from './admin-login.service';
import { Router } from '@angular/router';
import { JwtService } from '../../common/service/jwt.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  formGroup!: FormGroup;
  loginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminLoginService: AdminLoginService,
    private jwtService: JwtService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formGroup =this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(){
    if(this.formGroup.valid){
      this.adminLoginService.login(this.formGroup.value)
        .subscribe({
          next: (response) => {
            this.loginError = false;
            if(response.adminAccess){
              this.jwtService.setToken(response.token);
              this.jwtService.setAdminAccess(true);
            }
            this.router.navigate(["/admin"]);
          },
          error: () => this.loginError = true
        })
    }
  }

}
