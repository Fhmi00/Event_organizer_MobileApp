import PushNotification from 'react-native-push-notification';

class Notification {
  constructor() {
    PushNotification.createChannel(
      {
        channelId: 'remind-product', // (required)
        channelName: 'Reminder Product', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );

    PushNotification.createChannel(
      {
        channelId: 'new-product', // (required)
        channelName: 'New Product', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  showNotification() {
    PushNotification.localNotification({
      channelId: 'remind-product', // (required) channelId, if the channel doesn't exist, notification will not trigger.
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  }

  scheduleProductNotification({title, message, date}) {
    PushNotification.localNotificationSchedule({
      channelId: 'remind-product', // (required) channelId, if the channel
      title, // title : title
      message,
      date,
    });
  }
}

export default new Notification();
