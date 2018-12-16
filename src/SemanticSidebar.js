import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Grid
} from 'semantic-ui-react';
// import FloatedButton from './FloatedButton';
import './assets/fonts/font-awesome-4.2.0/css/font-awesome.min.css';

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}>
    <Grid textAlign="center">
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as="h3">New Content Awaits</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid>
    </Grid>
  </Sidebar>
);

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin">
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default class SemanticSidebar extends Component {
  state = {
    animation: 'overlay',
    direction: 'top',
    dimmed: true,
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible });

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

  handleDirectionChange = direction => () =>
    this.setState({ direction, visible: false });

  render() {
    const { animation, dimmed, direction, visible } = this.state;
    const vertical = direction === 'bottom' || direction === 'top';

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          {vertical ? (
            <HorizontalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          ) : null}
          {vertical ? null : (
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          )}

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

// export default class SemanticSidebar extends Component {
//   state = { visible: false };

//   handleHideClick = () => this.setState({ visible: false });
//   handleShowClick = () => this.setState({ visible: true });
//   handleSidebarHide = () => this.setState({ visible: false });

//   render() {
//     const { visible } = this.state;

//     return (
//         <div>
//         <Button floated="right" icon>
//           <Icon size="large" name="content" className="content big icon" />
//           Right Floated
//         </Button>

//         <Sidebar.Pushable as={Segment}>
//           <Sidebar
//             as={Menu}
//             animation="overlay"
//             icon="labeled"
//             direction="right"
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical="true"
//             visible={visible}
//             width="thin">
//             <Menu.Item as="a">
//               <Icon name="home" />
//               Home
//             </Menu.Item>
//             <Menu.Item as="a">
//               <Icon name="gamepad" />
//               Games
//             </Menu.Item>
//             <Menu.Item as="a">
//               <Icon name="camera" />
//               Channels
//             </Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher dimmed={visible}>
//             <Segment basic>
//               <Header as="h3">Application Content</Header>
//               <Image src="./prettymomma.png" className="App-logo" alt="logo" />
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     );
//   }
// }
