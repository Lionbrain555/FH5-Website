import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem("todos")
    if(data !== "" && data !== null) {
    this.autos = JSON.parse(data)}
  }

  autos = [
    {model: "911", brand: "Porsche", imageurl: "https://volsiz.ru/wp-content/uploads/2022/03/forza-horizon-fh-5-how-to-get-the-16-porsche-911-gt3-rs_621fdbc218baa-840x400.jpeg", topspeed: "314km/h", country: "Germany", wd: "RWD" },
    {model: "Challenger SRT Demon", brand: "Dodge", imageurl: "https://i.ytimg.com/vi/gA-QmEPae_c/maxresdefault.jpg", topspeed: "339km/h", country: "USA", wd: "RWD" },
    {model: "Supra", brand: "Toyota", imageurl: "https://s1.cdn.autoevolution.com/images/news/widebody-toyota-supras-are-looking-smokin-hot-in-virtual-forza-horizon-5-preview-171638_1.jpg", topspeed: "250km/h", country: "Japan", wd: "RWD" },
    {model: "One", brand: "Mercedes-AMG", imageurl: "https://i.pinimg.com/originals/09/06/f7/0906f75736d43a65eaa3ea877c880d99.jpg", topspeed: "350km/h", country: "Germany", wd: "AWD"},
    {model: "Jesko", brand: "Koenigsegg", imageurl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/Forza-Horizon-5--What-The-Fastest-Car-After-Upgrades-Is.jpg?q=50&fit=crop&w=767&h=450&dpr=1.5", topspeed: "496km/h", country: "Sweden", wd: "RWD"},
    {model: "Mach-E", brand: "Ford Mustang", imageurl: "https://bioage.typepad.com/.a/6a00d8341c4fbe53ef0263ec294be1200c-600wi", topspeed: "259km/h", country: "Mexico", wd: "Switch between RWD and AWD"}
   ];
}
