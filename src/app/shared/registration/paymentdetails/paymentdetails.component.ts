import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  progress: number;

  constructor(private service: PortalService, private router: Router, private userService: UserService) { }
  fileToUpload: File = null;
  paymentDetailsForm: any = {};
  messages: any = {};
  showError: boolean = false;
  showSuccess: boolean = false;
  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  savePayment(paymentDetailsForm: any) {
    let formData: FormData = new FormData();
    formData.append('Image', this.fileToUpload, this.fileToUpload.name);
    formData.append('Amount', this.paymentDetailsForm.Amount);
    formData.append('UserId', this.userService.getItemFromStorage("userId"));
    formData.append('CenterId', this.paymentDetailsForm.CenterID);
    formData.append('Receipt_No', this.paymentDetailsForm.Receipt_No);
    this.service.SavePaymentDetails(formData).subscribe((event) => {
      console.log(event);
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.showSuccess = true;
        this.showError = false;
        this.messages.success = "Account create successfully. Your account will be activated within 3 working days."

      }

      // this.router.navigate(['/login']);
    }, (error) => {
      console.log(error)

    })
  }


}
