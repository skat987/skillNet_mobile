import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

// Plug-ins
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

// Models
import { Planning } from './../../models/planning';

// Services
import { ApiService } from './../../service/api/api.service';

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.page.html',
  styleUrls: ['./plannings.page.scss'],
})
export class PlanningsPage implements OnInit {
  public planning: Planning;

  // tslint:disable-next-line:max-line-length
  constructor(private platform: Platform, private document: DocumentViewer, private file: File, private transfer: FileTransfer, private apiService: ApiService) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setPlanning());
  }

  private setPlanning(): void {
    this.apiService.get('students/calendar').then((resp: any) => {
      // tslint:disable-next-line:max-line-length
      this.planning = new Planning(resp[0].id, resp[0].file_name, resp[0].file_url, resp[0].formation_id, resp[0].created_at, resp[0].updated_at);
    }).catch(e => console.log('Error setting planning: ', e));
  }

  public openFile(url: any): void {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let path: any;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
    fileTransfer.download(url, path + url).then(entry => {
      console.log('open file controle: ', entry);
      this.document.viewDocument(entry.toURL(), 'application/pdf', {});
    }).catch(e => console.log('Error opening file: ', e));
  }
}
