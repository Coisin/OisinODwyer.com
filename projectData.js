var projectCSSDirectory = "stylesheets/projects/";

projectData = {
    tables: {
    name: "Tables",
    description: `Tables is an implementation of the Java JTable class, which allows you to easily bind data structures
    to tables in your Java Swing applications.`,
    links: ["https://www.github.com/coisin/javatables", "https://github.com/Coisin/JavaTables/releases/latest"],
    linkDisplays: ["Github.com/Coisin/JavaTables", "Download"],
    stylesheet: projectCSSDirectory +"tables.css",
    favicon: "",
    returnLink: "project.html",
    returnDisplay: "Return to Projects",
    numRows: 3,
    rows: [
      {},
      {},
      {
        content: `<div class="code-info">
        <h4>The above Table was made using Java Tables, with the following, simple line of code</h4>
      </div>
      <pre class="code-block">
        <code class="language-java">
          Table&ltSeries&gt seriesTable = new Table(Series.class);</code>
      </pre>
      <div class="code-info">
        <h4>Here, <code>Series</code> is a simple class:</h4>
      </div>
      <pre class="code-block"><code class="language-java">
          public class Series {
            public String name, link, service;
            public int progress = 0;

            public Series(String name, String link, String service) {
              this.name = name;
              this.link = link;
              this.service = service;
            }
          }
        </code></pre>
        <div class="code-info">
          <h4>In order to ignore the <code>progress</code> field, we can use the following line of code: </h4>
        </div>
        <pre class="code-block"><code class="language-java">
          seriesTable.avoidColumn("progress");
        </code></pre>
        <div class="code-info">
          <h4>Last of all, in order to add rows to the table, all we must do is create a <code>Collection&ltSeries&gt</code>, and call
            the <code>addManyRows()</code> method:</h4>
        </div>
        <pre class="code-block">
          <code class="language-java">
            ArrayList&ltSeries&gt series = new ArrayList(); /* ArrayList implements Collection&ltE&gt */
            series.add(new Series("Death Note", "http://www.mangareader.net/death-note", "MangaReader"));

            seriesTable.addManyRows(series);
          </code>
        </pre>`
      }
    ],
    postFunctions: []
  },
  raptor: {
  name: "MangaRaptor",
  description: `MangaRaptor is an application built in Java, which allows you to download unlimited amounts of Manga,
onto your computer, in the form of picture files, all for free! The images are scraped from a number of websites, such as MangaReader.net
and Manga3.net.`,
  links: ["https://www.github.com/Coisin/MangaRaptor", "https://github.com/Coisin/MangaRaptor/releases/latest"],
  linkDisplays: ["Github.com/Coisin/MangaRaptor", "Download"],
  stylesheet: projectCSSDirectory +"raptor.css",
  favicon: "resources/mangaraptor-2.png",
  numRows: 4,
  returnLink: "project.html",
  returnDisplay: "Return to Projects",
  rows: [
    {},
    {},
    {},
    {
      content: `    <h1>How it works?</h1>
          <h4>If you want to download individual chapters, or all chapters of a manga series, MangaRaptor enables you to do so.</h4>
          <ul class="instruction-list">
            <li>Upon opening the application, type the name of the Manga Series into the Search Text Field, and click search. This
                will open a tabbed layout of the various Manga Downloading Services.
            </li>
            <li>Navigate through the tabs, to find the series which you are looking for. Click it, and click the "Add" button.</li>
            <li>All the chapters for the selected Manga Series will open in the Chapters Table. You can then select all the individual chapters
                you wish to download, or click the "Select All" button beneath the table. Selected multiple items can be done by
                holding Control, and clicking on each chapter. Once finished, click the "Add To Downloads" button.</li>
            <li>Between the two tables, there is a button for selecting a destination directory. Click this and selectory a directory,
                in which to download your Manga.</li>
            <li>Click the "Download" button beneath the Downloads Table.</li>
          </ul>`
    },
  ],
  postFunctions: []
  },
  examli: {
  name: "Examli",
  description: `Examli is an online application, written in Ruby On Rails, which is to help students study, in a quiz like
  manor. I was one of two people who contributed to this project (The other being <a href="http://www.gytdau.com/">Gytis Daujotas</a>).`,
  links: ["http://www.exam.li/"],
  linkDisplays: ["Exam.li"],
  stylesheet: projectCSSDirectory +"examli.css",
  favicon: "",
  returnLink: "project.html",
  returnDisplay: "Return to Projects",
  numRows: 3,
  rows: [
    {},
    {},
    {}
  ],
  postFunctions: []
  },
  default: {
    name: "Projects",
    description: `Here is a list of many projects which I have participated in.`,
    favicon: "resources/avatar.png",
    returnLink: "index.html",
    returnDisplay: "Return to Ois&#237n O'Duibhir",
    numRows: 3,
    links: [],
    linkDisplays: [],
    stylesheet: "",
    rows: [
      {},
      {},
      {
        content: `  <table class="project-list project-list-lg"></table>`
      }
    ],
    postFunctions: [
      function() {
        for(var i in projectData) {
          if(i == "default") continue;
          $(".project-list").append("<tr><td><a href='project.html?p=" + i + "' class='project-listing'>" + projectData[i].name + "</a></td></tr>");
        }
      }
    ]
  }
};
