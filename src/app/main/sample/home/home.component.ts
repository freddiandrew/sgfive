import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { DataLayerService } from '../../../shared/data-layer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class HomeComponent implements OnInit {
   
  activity: any;
  view: string;
  contentAct: any[];
  

  constructor(
    private dl: DataLayerService
  ) { 
    this.view = 'preview';
   }

  ngOnInit(): void {
    this.getActivity();
    
  }

  getActivity(){
    this.dl.getActivities().subscribe(resp => {
      this.activity = resp ;
      this.contentAct = resp.filter(cc => cc.status == true);
})
  }

  labelChange(nm, event){
    console.log(nm,event.checked);
    this.dl.saveActivities(nm).subscribe((saved:any) => {
          console.log('just saved',saved.id);
          this.getActivity();
    })
  }

}
