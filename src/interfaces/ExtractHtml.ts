interface ExtractHtml {
  get: (url: string) => Promise<string>;
}

export default ExtractHtml;