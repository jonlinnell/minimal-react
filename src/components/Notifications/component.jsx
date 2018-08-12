import React from 'react'
import propTypes from 'prop-types'

import Notification from '../Notification'

const Notifications = props => (
  <div>
    {
      props.notifications.map(notification => (
        <Notification
          notification={notification}
          key={notification.index}
        />
      ))
    }
  </div>
)

Notifications.propTypes = {
  notifications: propTypes.arrayOf(propTypes.object),
}

Notifications.defaultProps = {
  notifications: [],
}

export default Notifications
