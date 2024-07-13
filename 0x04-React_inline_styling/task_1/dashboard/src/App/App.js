import React from 'react';
import { StyleSheet, css } from "aphrodite";
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { Component } from 'react';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const styles = StyleSheet.create({
  app: {
    padding: "20px",
  },
  header: {
    padding: "20px 0",
    borderBottom: "1px solid #ccc",
  },
  body: {
    margin: "0 auto",
    maxWidth: "900px",
    padding: "20px 0",
  },
  footer: {
    padding: "10px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static propTypes = {
    logOut: PropTypes.func
  };

  static defaultProps = {
    logOut: () => {}
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const listNotifications = [
      { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'New course available' },
      { id: 2, html: { __html: 'Notification 2' }, type: 'urgent' },
      { id: 3, html: { __html: 'Notification 3' }, type: 'urgent', value: 'New resume available' },
    ];

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const isLoggedIn = true;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <div className={css(styles.header)}>
            <Header />
          </div>
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                {" "}
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                {" "}
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p></p>
            </BodySection>
          </div>

          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
