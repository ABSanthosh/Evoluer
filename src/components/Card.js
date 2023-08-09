export default function TitleCard() {
  return this.html`
      <a
        class="TitleCard make-flex"
        href="${this.props.href}"
    >
      ${this.props.title}
    </a>
  `;
}
