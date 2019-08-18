import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  private stockId: number;
  private isInfo: boolean;
  private butName: string;
  private registerName: string;
  private loginInfo: string;
  private loginFrom: boolean;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private  routeInfo: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    this.routeInfo.params.subscribe((params: Params) => this.stockId = params['id']);
    if (this.stockId == 1) {//普通登录界面
      this.loginFrom = true;
      this.isInfo = true;
      this.butName = '登录';
      this.registerName = '立即注册';
      this.loginInfo = '';
    } else if (this.stockId == 3) {//扫完微信后的登录界面
      this.loginFrom = true;
      this.isInfo = false;
      this.butName = '立即绑定';
      this.registerName = '立即创建';
      this.loginInfo = '为更好的提供服务，请绑定一个数据计算平台账号。';
    } else if (this.stockId == 2) {//微信扫描页
      this.loginFrom = false;
    } else {
      console.log('出错啦');
    }
  }
  backLogin() {
    this.router.navigate(['login/1']);
    this.loginFrom = true;
    this.isInfo = true;
    this.butName = '登录';
    this.registerName = '立即注册';
    this.loginInfo = '';
  }

}
