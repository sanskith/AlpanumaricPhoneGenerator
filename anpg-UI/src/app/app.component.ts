import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{PhoneService} from'./app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anpg-UI';

  phoneForm = new FormGroup({
    PhoneNumber:new FormControl('', Validators.pattern(/^[1-9](([0-9]{6})|([0-9]{9}))$/))
  });
  config: any;
  collection : any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: PhoneService) {
  }

  pageChange(newPage: number) {
      this.router.navigate([''], { queryParams: { page: newPage } });
  }


  onSubmit() {
    console.warn(this.phoneForm.value.PhoneNumber);
    this.config = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems:0
    };
    this.route.queryParams.subscribe(
    params => this.config.currentPage= params['page']?params['page']:1 );

    this.service.getData(this.phoneForm.value.PhoneNumber).subscribe(
      res=> {this.collection = res;   console.log(this.collection )}

    );

    // for (let i = 1; i <= 100; i++) {
    // this.collection.push(`item ${i}`);
    // }
  }
}
