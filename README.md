Reading CSV file with Javascript and HTML5 File API
===============

Run
---

Just clone the project and run `index.html`.
This app is accesible [here][1].

File API
--------

HTML5 finally provides a standard way to interact with local files, via the [File API][2]


FileReader includes four options for reading a file, asynchronously:

- `FileReader.readAsBinaryString(Blob|File)` - The result property will contain the file/blob's data as a binary string. Every byte is represented by an integer in the range [0..255].
- `FileReader.readAsText(Blob|File, opt_encoding)` - The result property will contain the file/blob's data as a text string. By default the string is decoded as 'UTF-8'. Use the optional encoding parameter can specify a different format.
- `FileReader.readAsDataURL(Blob|File)` - The result property will contain the file/blob's data encoded as a data URL.
- `FileReader.readAsArrayBuffer(Blob|File)` - The result property will contain the file/blob's data as an ArrayBuffer object.

For our example, we want to read a CSV file, so we can read it as text. And perfom data processing after in `processData(csv)` function.


You can read this [post][3] for more details.

[1]: http://mounirmesselmeni.github.io/html-fileapi
[2]: http://www.w3.org/TR/file-upload/
[3]: http://mounirmesselmeni.github.io/2012/11/20/reading-csv-file-with-javascript-and-html5-file-api
