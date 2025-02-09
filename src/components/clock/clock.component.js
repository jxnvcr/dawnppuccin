class Clock extends Component {
  refs = {
    date: ".clock-date",
    time: ".clock-time",
    icon: ".clock-icon",
  };

  constructor() {
    super();
  }

  imports() {
    return [this.resources.icons.material, this.resources.fonts.roboto];
  }

  style() {
    return `
        .clock {
          display: flex;
          flex-direction: row;
          justify-contents: center;
          align-items: center;
          height: 100%;
        }

        .clock-date {  
          white-space: nowrap;
          font: 450 10pt 'Roboto', sans-serif;
          color: ${CONFIG.palette.text};
          letter-spacing: .7pt;
          margin-right: 10px;
          display: none;
        }

        .clock-time {
          white-space: nowrap;
          font: 300 10pt 'Roboto', sans-serif;
          color: ${CONFIG.palette.text};
          letter-spacing: .7pt;
        }

        .clock:hover .clock-date {
          display: inline-block;
        }

        .clock-icon {
            font-size: 14pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="clock">
            <span class="material-icons clock-icon">schedule</span>
            <p class=clock-date></p>
            <p class=clock-time></p>
        </span>`;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.palette.maroon;
  }

  setDate() {
    const date = new Date();
    this.refs.date = date.strftime(CONFIG.clock.date);
  }

  setTime() {
    const date = new Date();
    this.refs.time = date.strftime(CONFIG.clock.time);
  }

  connectedCallback() {
    this.render().then(() => {
      this.setDate();
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);
    });
  }
}
