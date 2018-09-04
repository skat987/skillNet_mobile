import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

// Plug-ins
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

// Models
import { Planning } from '../../models/planning';

// Services
import { ApiService } from './../../service/api/api.service';

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.page.html',
  styleUrls: ['./plannings.page.scss'],
})
export class PlanningsPage implements OnInit {
  public plannings: Planning[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private platform: Platform, private apiService: ApiService, private file: File, private transfer: FileTransfer, private document: DocumentViewer) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setPlannings());
  }

  private setPlannings(): void {
    this.apiService.get('teachers/calendar').then((resp: any) => {
      this.plannings = [];
      for (let i = 0; i < resp.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.plannings[i] = new Planning(resp[i].id, resp[i].file_name, resp[i].file_url, resp[i].formation_id, resp[i].created_at, resp[i].updated_at);
      }
    }).catch(e => console.log('Error setting plannings: ', e));
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
