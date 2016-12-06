import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

  const contactsData = [
              {
                name: 'Leo',
                phone: 'Call Leo',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/13737051_1652476738405161_400182703_a.jpg"
              },
               {
                name: 'David',
                phone: 'Call David',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/14705003_1115352591893132_776570760457093120_n.jpg"
              },
               {
                name: 'Walter',
                phone: 'Call Wally',
                ref: 'tel:123-345-9809',
                avatar: "https://c2.staticflickr.com/6/5714/30704177546_6ff19a5374_q.jpg"
              },
               {
                name: 'Chris',
                phone: 'Call Chris',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/15046935_362291027441041_4233328631197204480_n.jpg"
              }, 
              {
                name: 'Corey',
                phone: 'Call Corey',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/14718059_673320019499423_2331861521660903424_n.jpg"
              },
               {
                name: 'Annie',
                phone: 'Call Annie',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e15/11376227_510094419142683_982902822_n.jpg"
              },
               {
                name: 'Caroline',
                phone: 'Call Caroline',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/14719337_620641994785027_675237926300286976_n.jpg"
              },
               {
                name: 'Ian',
                phone: 'Call Ian',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/13707373_103763210064357_782797245_n.jpg"
              },
              {
                name: 'Ivan',
                phone: 'Call Ivan',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/13725633_1613174855646772_326925254_n.jpg"
              },
              {
                name: 'Jessica',
                phone: 'Call Jessica',
                ref: 'tel:123-345-9809',
                avatar: "https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/14276677_1104194262967829_849255149_a.jpg"
              },
  ];

export default class EmergencyNumbers extends React.Component {

  
 

  render() {
    const staff = contactsData.map((contact, index) => {
                return ( <ListItem key={index}
          leftAvatar={<Avatar src= {contact.avatar} />}
          primaryText={<h3>{contact.name}</h3>}
          secondaryText={
            <ul>
              <li>Phone: <a href= {contact.ref} >{contact.phone}</a></li>
            </ul>
          }
          secondaryTextLines={2}
        ></ListItem>
        )
  });

    return (
     <div>
      <div>
      <List>
        <Subheader style={{textAlign: 'center'}}><h1>Contact List</h1></Subheader>
         {staff}
        <Divider inset={true} />
      </List>
    </div>
    </div>
    );
  }
}