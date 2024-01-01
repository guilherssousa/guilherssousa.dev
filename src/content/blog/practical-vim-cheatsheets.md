---
title: "vcs: Vim Cheatsheets, even offline"
description: "`vcs` is a small Go program that opens a Vim Cheatsheet for you."
pubDate: "Jul 26 2023"
---
I recently started using Neovim as my main code editor.
Despite already knowing basic Vim commands to use to make small specific changes,
I still lack a lot to have an interesting workflow, since Vim uses and abuses several
Keybindings that require user practice.

After a while, opening Google to search for some action gets tiring, so I decided to
make a small script that opens a local version of Vim Cheat Sheet, which loads even
offline (using the browser's page saving function) and which is easy to access via
terminal, so you can make quick and practical queries so you don't waste a lot of time.

Unlike my other code shown here (see: [pr](/blog/jump-to-what-matters)), this one is written
in Go, which is a language I've been experimenting with a lot recently, along with Vim.

```go
package main

import (
  "fmt"
  "log"
  "os"
  "os/exec"
  "path/filepath"
  "runtime"
)
func openBrowser(url string) {
  var err error
  switch runtime.GOOS {
  case "linux":
    err = exec.Command("xdg-open", url).Start()
  case "windows":
    err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
  case "darwin":
    err = exec.Command("open", url).Start()
  default:
    err = fmt.Errorf("unsupported platform")
  }
  if err != nil {
    log.Fatal(err)
  }
}

func main() {
  running_path, err := os.Executable()
  if err != nil {
    log.Println(err)
  }

  dir, _ := filepath.Split(running_path)

  file_path := fmt.Sprintf("file://%s/cheatsheet.html", dir)

  fmt.Println(`Abrindo a cheatsheet...`)

  openBrowser(file_path)
}
```

I also released this snippet on my GitHub Gists, so feel free to leave a star there ⭐

Hope you enjoy it!
