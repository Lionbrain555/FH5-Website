import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem("todos")
    if(data !== "" && data !== null) {
    this.cars = JSON.parse(data)}
  }

  cars = [
    {
      model: "911", 
      brand: "Porsche", 
      imageurl: "https://volsiz.ru/wp-content/uploads/2022/03/forza-horizon-fh-5-how-to-get-the-16-porsche-911-gt3-rs_621fdbc218baa-840x400.jpeg",
      topspeed: "314km/h", 
      country: "Germany", 
      wd: "RWD", 
      brandpic: "https://images.cults3d.com/lT1f7nyC9tumtEsDHu-y85UdThQ=/https://files.cults3d.com/uploaders/15233766/illustration-file/b5aee6ac-a723-4b92-bd70-6be0c2405d1d/1.jpg"
    },
    {
      model: "Challenger SRT Demon", 
      brand: "Dodge", 
      imageurl: "https://i.ytimg.com/vi/gA-QmEPae_c/maxresdefault.jpg", 
      topspeed: "339km/h", 
      country: "USA", 
      wd: "RWD", 
      brandpic: "https://i.pinimg.com/originals/39/f5/86/39f5863fcf33e391c474cdd08602655f.jpg"
    },
    {
      model: "Supra", 
      brand: "Toyota", 
      imageurl: "https://i0.wp.com/www.xboxracer.com/wp-content/uploads/2021/11/Forza-Horizon-5-Supra-GR.jpg?fit=1920%2C1080&ssl=1", 
      topspeed: "250km/h", 
      country: "Japan", 
      wd: "RWD", 
      brandpic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU13jTTATKCOc4Rsod-GC3Bbs_2PewozbzxQ&usqp=CAU"
    },
    {
      model: "One", 
      brand: "Mercedes-AMG", 
      imageurl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8df4b63c-3e4c-4259-8328-66bbe5a2f1b6/deu281o-55b690d6-4d56-4dfa-a7a3-20d905078764.png/v1/fill/w_1192,h_670,q_70,strp/forza_horizon_5___2021_mercedes_amg_one_by_fred_104_centurion_deu281o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzhkZjRiNjNjLTNlNGMtNDI1OS04MzI4LTY2YmJlNWEyZjFiNlwvZGV1Mjgxby01NWI2OTBkNi00ZDU2LTRkZmEtYTdhMy0yMGQ5MDUwNzg3NjQucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uesqH7of0Pal2dmfx5IYaAeBnADEWGgs-gSW_ga4Tm4", 
      topspeed: "350km/h", 
      country: "Germany", 
      wd: "AWD", 
      brandpic: "data:image/png;base64,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"
    },
    {
      model: "Jesko", 
      brand: "Koenigsegg", 
      imageurl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/Forza-Horizon-5--What-The-Fastest-Car-After-Upgrades-Is.jpg?q=50&fit=crop&w=767&h=450&dpr=1.5", 
      topspeed: "496km/h", 
      country: "Sweden", 
      wd: "RWD", 
      brandpic: "https://upload.wikimedia.org/wikipedia/de/thumb/6/67/Koenigsegg_%28Fahrzeughersteller%29_logo.svg/2000px-Koenigsegg_%28Fahrzeughersteller%29_logo.svg.png?20081129174049"
    },
    {
      model: "Mach-E", 
      brand: "Ford Mustang", 
      imageurl: "https://bioage.typepad.com/.a/6a00d8341c4fbe53ef0263ec294be1200c-600wi", 
      topspeed: "259km/h", 
      country: "Mexico", 
      wd: "Switch between RWD and AWD", 
      brandpic: "https://lezebre.lu/images/detailed/84/48478-Ford-Mustang-1color.jpg"
    },
    {
      model: "Tachyon Speed", 
      brand: "RAESR", 
      imageurl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8df4b63c-3e4c-4259-8328-66bbe5a2f1b6/devm8ae-8eb14efd-3b27-4914-b1b1-89687680754b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkZjRiNjNjLTNlNGMtNDI1OS04MzI4LTY2YmJlNWEyZjFiNlwvZGV2bThhZS04ZWIxNGVmZC0zYjI3LTQ5MTQtYjFiMS04OTY4NzY4MDc1NGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vn5DOTeFcP0kDbau6Nut9M_AF0xOZ8GzTziYH0feDGQ", 
      topspeed: "387km/h", 
      country: "USA", 
      wd: "AWD", 
      brandpic: ""},
    {
      model: "Hoonigan Hoonicorn",
      brand: "Ford Mustang", 
      imageurl: "https://i0.wp.com/rushbfast.com/wp-content/uploads/2021/11/rushBfast-Forza-Horizon-5-Hoonigan-Ford-Mustang-Drift.jpg?fit=2560%2C1440&ssl=1", 
      topspeed: "410km/h", 
      country: "USA", 
      wd: "AWD", 
      brandpic: "https://logosave.com/images/large/1/Hoonigan-1-logo.jpg"
    },
    {
      model: "Sesto Elemento Forza Edition", 
      brand: "Lamborghini", 
      imageurl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8df4b63c-3e4c-4259-8328-66bbe5a2f1b6/deu3ab2-73373a35-ed39-480b-b18f-e137907f7af7.png/v1/fill/w_1192,h_670,q_70,strp/fh5___2011_lamborghini_sesto_elemento_fe_by_fred_104_centurion_deu3ab2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzhkZjRiNjNjLTNlNGMtNDI1OS04MzI4LTY2YmJlNWEyZjFiNlwvZGV1M2FiMi03MzM3M2EzNS1lZDM5LTQ4MGItYjE4Zi1lMTM3OTA3ZjdhZjcucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uLuV5S7gFn2VcMXAMVHXNaBe9y3B6DqHjjHhNqkVadc", 
      topspeed: "442km/h", 
      country: "Italy", 
      wd: "AWD", 
      brandpic: "https://images.cults3d.com/DMxuw-tXxpWUre4GD8_ePBbdgI8=/516x516/https://files.cults3d.com/uploaders/13805064/illustration-file/5d27009f-3547-414d-b2ab-bbc836cc8e14/IMG_9835.JPG"
    },
    {
      model:"Vulcan AMR Pro",
      brand:"Aston Martin",
      imageurl:"https://www.kudosprime.com/fh4/images/users/car_676_1_5f510a5216f85.jpg",
      topspeed:"325km/h",
      country:"UK",
      wd:"RWD",
      brandpic:"https://c8.alamy.com/comp/DWE3K6/aston-martin-logo-symbol-icon-flag-emblem-DWE3K6.jpg",
    },
    {
      model:"Divo",
      brand:"Bugatti",
      imageurl:"https://i.ytimg.com/vi/xvF9_IKz67Y/maxresdefault.jpg",
      topspeed:"400km/h",
      country:"France",
      wd:"AWD",
      brandpic:"https://w7.pngwing.com/pngs/161/996/png-transparent-2011-bugatti-veyron-bugatti-chiron-logo-bugatti-eb-110-bugatti-logo-text-rectangle-computer-wallpaper.png",
    },
    {
      model:"Huyra BC",
      brand:"Pagani",
      imageurl:"https://i.redd.it/8si52qkotkz71.jpg",
      topspeed:"383km/h",
      country:"Italy",
      wd:"RWD",
      brandpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdW_UfcEco7TY9hsZP6t9txq2wD9PQb6K1jw&usqp=CAU",
    },
    {
      model:"Hoonigan RS200",
      brand:"Ford",
      imageurl:"https://i.imgur.com/QxBvO8J.jpeg",
      topspeed:"343km/h",
      country:"USA",
      wd:"AWD",
      brandpic:"https://logosave.com/images/large/1/Hoonigan-1-logo.jpg"
    },
    {
      model:"599XX Evolution",
      brand:"Ferrari",
      imageurl:"https://i.ytimg.com/vi/x4_DdVeLTb0/maxresdefault.jpg",
      topspeed:"515km/h",
      country:"Italy",
      wd:"RWD",
      brandpic:"https://upload.wikimedia.org/wikipedia/de/thumb/c/c0/Scuderia_Ferrari_Logo.svg/1200px-Scuderia_Ferrari_Logo.svg.png",
    },
    {
      model:"Bronco 2021",
      brand:"Ford",
      imageurl:"https://autobizz.in/wp-content/uploads/2022/04/Ford-Bronco-FH5.png",
      topspeed:"260km/h",
      country:"Mexico",
      wd:"AWD",
      brandpic:"https://www.antik-und-kultiges.de/media/image/ce/d3/76/Ford-Magnet-14399_600x600.jpg",
    },
   ];
}
