import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'texttoSpeech';
  iconList = [
    { type: "xlsx", src: "assets/Images/" },
    { type: "pdf", src: "../assets/Images/pdficon.jpg" },
    { type: "jpg", src: "assets/Images/PDFfileicon.svg" }
  ];
  src: string = "";
  modal: boolean = false;
  audioFile: any;
  audioModal: boolean = false;

  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'Online MP3 File URL';
  msbapDisplayTitle = true;

  // pdf = "../assets/sample1.pdf"

  pdfList = [
    {
      name: "sample1.pdf",
      uri: "../assets/sample1.pdf",
      url: "../assets/sample.mp3",

    },

    {
      name: "kali.pdf",
      uri: "../assets/sample1.pdf",
      url: "../assets/sample.mp3",
    }
    , {
      name: "GAR.pdf",
      uri: "../assets/GAR.pdf",
      url: "../assets/sample.mp3",
    }
  ]
  viewPdf(index: number) {
    debugger;
    this.modal = true;
    console.log(index);
    // console.log(this.pdfList[index].uri);
    this.src = this.pdfList[index].uri;
  }
  viewAudioPopup(index: number) {
    var audio = new Audio();
    this.modal = false;
    this.audioModal = true;
    this.audioFile = this.pdfList[index];
    // console.log(this.audioFile);
    console.log(audio.play)


  }
  playAudio() {
    var audio = new Audio("../assets/sample.mp3")
    audio.play();
  }
  pauseAudio(){
    
  }




  getFileExtensionIcon(Filename: any) {
    // debugger;

    let ext = Filename.name.split('.').pop()
    // console.log(ext);
    let obj = this.iconList.filter(row => row.type === ext)

    if (obj.length > 0) {
      let icon = obj[0].src;
      return icon;
    } else {
      return "";
    }





  }
}



