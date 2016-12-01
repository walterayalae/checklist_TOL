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

export default class EmergencyNumbers extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
     <div>
      <div>
      <List>
        <Subheader style={{textAlign: 'center'}}><h1>Contact List</h1></Subheader>
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/13737051_1652476738405161_400182703_a.jpg" />}
          primaryText={<h3>Leo</h3>}
          secondaryText={
            <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/14705003_1115352591893132_776570760457093120_n.jpg" />}
          primaryText={
            <h3>David<span style={{color: lightBlack}}></span></h3>
          }
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://c2.staticflickr.com/6/5714/30704177546_6ff19a5374_q.jpg" />}
          primaryText={<h3>Walter</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:915-667-0831">Call Wally</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/15046935_362291027441041_4233328631197204480_n.jpg" />}
          primaryText={<h3>Chris</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/14718059_673320019499423_2331861521660903424_n.jpg" />}
          primaryText={<h3>Corey</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
         <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e15/11376227_510094419142683_982902822_n.jpg" />}
          primaryText={<h3>Annie</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
         <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/14719337_620641994785027_675237926300286976_n.jpg" />}
          primaryText={<h3>Caroline</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
         <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/13707373_103763210064357_782797245_n.jpg" />}
          primaryText={<h3>Ian</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
         <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-15/e35/13725633_1613174855646772_326925254_n.jpg" />}
          primaryText={<h3>Ivan</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
          <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://scontent-dft4-2.cdninstagram.com/t51.2885-19/s150x150/14276677_1104194262967829_849255149_a.jpg" />}
          primaryText={<h3>Jessica</h3>}
          secondaryText={
             <ul>
              <li>Phone: <a href="tel:123-345-9809">123-345-6788</a></li>
              <li>email: wasass@fokki.com</li>
            </ul>
          }
          secondaryTextLines={2}
        />
      </List>
    </div>
    </div>
    );
  }
}