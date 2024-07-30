var data = [ 
    { name: 'Documents', type: 'folder', children: [
      { name: 'Bar', type: 'folder', children: [
        { name: 'Video feed - Cam 02', type: 'file', url:'bar/cam_02.png' },
        { name: 'Criminal car', type: 'file', url:'bar/criminal_car.png' },
        { name: 'Name list', type: 'file', url:'bar/name_list.png' },
        { name: 'Victim', type: 'file', url:'bar/victim.png' }
      ]},
      { name: 'Desert', type: 'folder', children: [
        { name: 'Ganon picture 1', type: 'file', url:'desert/ganon1.png' },
        { name: 'Ganon picture 2', type: 'file', url:'desert/ganon2.png' },
        { name: 'Ganon picture 3', type: 'file', url:'desert/ganon3.png' },
        { name: 'Phone rec', type: 'file', url:'desert/phone_rec.png' },
        { name: 'Testimony', type: 'file', url:'desert/testimony.png' }
      ]},
      { name: 'Facility', type: 'folder', children: [
        { name: 'HDD', type: 'folder', children: [
            { name: 'Connie MOORE', type: 'folder', children: [
              { name: 'Notes', type: 'file', url:'facility/HDD/connie_moore/notes.png' },
              { name: 'Overview', type: 'file', url:'facility/HDD/connie_moore/overview.png' }
            ]},
            { name: 'Sacha COLE', type: 'folder', children: [
              { name: 'Content', type: 'file', url:'facility/HDD/sacha_cole/content.png' },
              { name: '03/04/1992', type: 'file', url:'facility/HDD/sacha_cole/03041992.png' }
            ]},
            { name: 'Content', type: 'file', url:'facility/HDD/content.png' },
            { name: 'Please stop', type: 'file', url:'facility/HDD/please_stop.png' }
        ]},
        { name: 'Code', type: 'file', url:'facility/code.png' },
        { name: 'Connie', type: 'file', url:'facility/connie.png' },
        { name: 'Entrance', type: 'file', url:'facility/entrance.png' },
        { name: 'Jerrycan', type: 'file', url:'facility/jerrycan.png' },
        { name: 'Suspect', type: 'file', url:'facility/suspect.png' }
      ]},
      { name: 'Fire', type: 'folder', children: [
        { name: 'Ash sample', type: 'file', url:'fire/ash_sample.png' },
        { name: 'Ring', type: 'file', url:'fire/ring.png' },
        { name: 'Summary', type: 'file', url:'fire/summary.png' },
        { name: 'Wedding picture', type: 'file', url:'fire/wedding_picture.png' }
      ]},
      { name: 'Graveyard', type: 'folder', children: [
        { name: 'Body 1', type: 'folder', children: [
          { name: 'Autopsy report 1', type: 'file', url:'graveyard/body1/autopsy_report_1.png' },
          { name: 'Badge', type: 'file', url:'graveyard/body1/badge.png' },
          { name: 'Photo back', type: 'file', url:'graveyard/body1/photo_back.png' },
          { name: 'Photo front', type: 'file', url:'graveyard/body1/photo_front.png' }
        ]},
        { name: 'Quinton SPENCE', type: 'folder', children: [
          { name: 'Floppy disk 1', type: 'folder', children: [
            { name: 'FMP 1138', type: 'file', url:'graveyard/quinton_spence/floppy_disk_1/fmp_1138.png' },
            { name: 'Res.1', type: 'file', url:'graveyard/quinton_spence/floppy_disk_1/res.1.png' },
            { name: 'Res.2', type: 'file', url:'graveyard/quinton_spence/floppy_disk_1/res.2.png' },
            { name: 'Study', type: 'file', url:'graveyard/quinton_spence/floppy_disk_1/study.png' }
          ]},
          { name: 'Floppy disk 2', type: 'folder', children: [
            { name: 'My confession', type: 'file', url:'graveyard/quinton_spence/floppy_disk_2/my_confession.png' }
          ]},
          { name: 'Autopsy report 2', type: 'file', url:'graveyard/quinton_spence/autopsy_report_2.png' },
          { name: 'Badge', type: 'file', url:'graveyard/quinton_spence/badge.png' },
          { name: 'Floppy disk 1', type: 'file', url:'graveyard/quinton_spence/floppy_disk_1.png' },
          { name: 'Floppy disk 2', type: 'file', url:'graveyard/quinton_spence/floppy_disk_2.png' }
        ]}
      ]},
      { name: 'Lab', type: 'folder', children: [
        { name: 'Dear EVE', type: 'file', url:'lab/dear_eve.png' },
        { name: 'Vials', type: 'file', url:'lab/vials.png' }
      ]},
      { name: 'Parking', type: 'folder', children: [
        { name: 'Bullet', type: 'file', url:'parking/bullet.png' },
        { name: 'Cam 004', type: 'file', url:'parking/cam_004.png' },
        { name: 'Car', type: 'file', url:'parking/car.png' },
        { name: 'Killer', type: 'file', url:'parking/killer.png' },
        { name: 'Light', type: 'file', url:'parking/light.png' }
      ]},
      { name: 'Surveillance', type: 'folder', children: [
        { name: 'Bottles', type: 'file', url:'surveillance/bottles.png' },
        { name: 'Bucket', type: 'file', url:'surveillance/bucket.png' },
        { name: 'Cat', type: 'file', url:'surveillance/cat.png' },
        { name: 'TV', type: 'file', url:'surveillance/tv.png' },
        { name: 'Video feed', type: 'file', url:'surveillance/video_feed.png' },
        { name: 'Wall', type: 'file', url:'surveillance/wall.png' },
        { name: 'Window', type: 'file', url:'surveillance/window.png' }
      ]},
      { name: 'Trash', type: 'folder', children: [
        { name: 'TO DELETE', type: 'folder', children: [
          { name: 'Alice', type: 'file', url:'trash/to_delete/alice.png' }
        ]}
      ]}
    ]}
];

function listHtml(children) {
  return  '<ul>' + children.map(node => 
              '<li>' + (node.url != undefined ? "<button class=\"btn\" onclick=\"window.open('https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/documents/" + node.url + "','_blank')\">" + node.name + "</button>" : node.name) +
                  (node.type === 'file' ? '' : listHtml(node.children)) +
              '</li>').join('\n') +
          '</ul>';
}

var html = listHtml(data);
var content = document.getElementById("content");

content.insertAdjacentHTML('beforeend', html );