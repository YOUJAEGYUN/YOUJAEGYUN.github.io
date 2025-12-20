import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href={resumeData.socialLinks[0].url}>
              <i className={resumeData.socialLinks[0].className} />
              </a>
            </li>
          </ul>

          <p
            style={{
              marginTop: '20px',
              fontSize: '1.0rem',
              color: '#888',
              textAlign: 'center',
            }}
          >
            📊 본 사이트는 방문 통계 분석을 위해 Google Analytics를 사용합니다.
                개인을 식별하는 정보는 수집하지 않습니다.
          </p>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}