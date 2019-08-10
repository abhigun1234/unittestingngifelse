import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() public parentData;
@Input('parentData') public name;
@Output() public  childEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  public sendDataEvent()
  { alert('hello')
    this.childEvent.emit("hi how are you")
  }

}
