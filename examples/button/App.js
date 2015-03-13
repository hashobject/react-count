var React = require('react');
var Count = require('../../lib/Count');
var OnlineCount = require('../../lib/OnlineCount');

var App = React.createClass({

  render: function(){
    return (
      <div className="row content">

        <ul className="items columns small-12">
          <li className="item">
            <a href="#" className="title">Multiple votes</a>
            <p>Button that allows to vote/click multiple times.</p>
            <Count counterText="followers" actionDoText="follow" actionDoneText="followed" allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='followers-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count allowMultiple=&#123;true&#125; counterText=&quot;followers&quot; actionDoText=&quot;follow&quot; actionDoneText=&quot;followed&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot; firebaseResourceId=&#39;followers-counter&#39;/&gt;
              </pre>
            </div>
          </li>
          <li className="item">
            <a href="#" className="title">Single vote</a>
            <p>Button that allows to vote/click single time. Information whether the button was clicked stored in the localStorage.</p>
            <Count actionDoText="do" actionDoneText="done" counterText="kudos" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count actionDoText=&quot;do&quot; actionDoneText=&quot;done&quot; counterText=&quot;kudos&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot; firebaseResourceId=&#39;kudos-counter&#39;/&gt;
              </pre>
            </div>
          </li>
          <li className="item">
            <a href="#" className="title">View counter</a>
            <p>View counter updates every time someone visits the page.</p>
            <Count isViewCounter={true} counterText="views" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='views-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count isViewCounter=&#123;true&#125; counterText=&quot;views&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot; firebaseResourceId=&#39;views-counter&#39;/&gt;
              </pre>
            </div>
          </li>
          <li className="item">
            <a href="#" className="title">Online counter</a>
            <p>Counters display number of visitors on the page at this moment.</p>
            <Count isOnlineCounter={true} counterText="views" firebaseHost="https://counter-button.firebaseio.com/"/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count isOnlineCounter=&#123;true&#125; counterText=&quot;views&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot;/&gt;
              </pre>
            </div>
          </li>
          <li className="item">
            <a href="#" className="title">OnlineCount component</a>
            <p>OnlineCount component behaves as previous example but has more compact syntax.</p>
            <OnlineCount counterText="views" firebaseHost="https://counter-button.firebaseio.com/"/>
            <div className="post">
              <pre className="brush: html">
                &lt;OnlineCount counterText=&quot;views&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot;/&gt;
              </pre>
            </div>
          </li>
          <li className="item">
            <a href="#" className="title">Readonly counter</a>
            <p>Counter that cannot be updated from the UI, but can still display some data from the Firebase. Can be used to build dashboards.</p>
            <Count isReadonly={true} counterText="users" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count isReadonly=&#123;true&#125; counterText=&quot;users&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot; firebaseResourceId=&#39;kudos-counter&#39;/&gt;
              </pre>
            </div>
          </li>
          <li className="item">
            <a href="#" className="title">Undo vote/click event</a>
            <p>Counter button with the support of the undo event.</p>
            <Count isUndoable={true} actionDoText="follow" actionUndoText="unfollow" counterText="followers" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
            <div className="post">
              <pre className="brush: html">
                &lt;Count isUndoable=&#123;true&#125; actionDoText=&quot;follow&quot; actionUndoText=&quot;unfollow&quot; counterText=&quot;followers&quot; firebaseHost=&quot;https://counter-button.firebaseio.com/&quot; firebaseResourceId=&#39;kudos-counter&#39;/&gt;
              </pre>
            </div>
          </li>
          </ul>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)