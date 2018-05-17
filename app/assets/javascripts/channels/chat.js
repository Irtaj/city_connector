App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
     // new Notification data["user"], body: data["body"]
     alert data['message']
  }

  list: (message) ->
    @perform 'list', message: message


  $(document).on 'keypress', '[data-behavior~= room_list]', (event) ->
    if event.keyCode is 13 # return = send
    App.room.list.event.target.value
    event.target.value =''
    event.preventDefault()


});
