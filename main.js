var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Happier",
        url: "https://www.youtube.com/embed/iWZmdoY1aTE"
      },
      {
        show: false,
        title: "Happier - Chorus no controls",
        url: "https://www.youtube.com/embed/iWZmdoY1aTE?controls=0&amp;start=55"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl
      };
      this.videos.push(obj);
    },

    deleteVideo: function(name) {
      console.log("Deleting video");
      for (let t of this.videos) {
        if (t.title == name) {
          this.videos.splice(this.videos.indexOf(t), 1);
        }
      }
      this.videos.slice(this.videos.title);
    }
  }
});
