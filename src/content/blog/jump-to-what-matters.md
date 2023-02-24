---
title: "pr: Jump to what matters"
description: "A PowerShell script that lets you jump to folders inside predefined directories"
pubDate: Feb 24 2023
---

I personally don't like to maintain a bunch of projects on the same directory, especially
if they are not from the same "category", like work, side projects, and open source.

But having to `cd` to them each time I want to access their workspace is so much of a pain.
So I decided to write a PowerShell script called `pr` (short for project) that lets me jump
to directories inside my predefined project directories. The usage is pretty straightforward:

```bash
pr blog
```

If you run the command above, it will search for directories named `blog` inside the paths
you listed on `$directories`, and if it exists, then it will `cd` into it.

Here is the full script:

```ps1
param (
    [string]$directory
)

# List of directories to search, change these lists to your desired
# directories. Understand that the priorities are left-to-right.
# e.g: "D:/projetos", "C:\Users\Gui\Desktop"
$directories = @("D:\a", "C:\b")

# Check if an argument was passed after the script name
if ($args.Count -gt 0) {
    # Use the first argument as the directory value
    $directory = $args[0]
}

# Check if the directory exists in the list
$matchingDirectory = $directories | Where-Object { Test-Path (Join-Path $_ $directory) }

# If a match was found, change to the matching directory
if ($matchingDirectory) {
    Set-Location (Join-Path $matchingDirectory $directory)
} else {
    Write-Host "Directory not found"
}
```

I first released this script as a gist, but I want to have a free slot
on my GitHub profile to showcase more interesting things than this one.

Hope you enjoy it!
