export function loadFont(name: string, url: string) {
  return new Promise<string | Error>((res, rej) => {
    var newFont = new FontFace(name, `url(${url})`);
    newFont
      .load()
      .then(function (loaded) {
        document.fonts.add(loaded);

        res(name);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}
