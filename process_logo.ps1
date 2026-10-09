Add-Type -AssemblyName System.Drawing

$inputPath = Join-Path (Get-Location) "Logo Kingyo.jpg"
$img = [System.Drawing.Bitmap]::FromFile($inputPath)
$w = $img.Width
$h = $img.Height

# We will generate:
# 1. Dark mode full logo:
#    - Fish: keep vibrant vermilion/coral red (#FF491E and #FF6A00)
#    - Eye circle inside: warm white or transparent with outline
#    - Text 'KINGYO': vibrant vermilion (#FF3311)
#    - Text 'Sushi & Fusion': pure warm ivory (#F5EEDC)
#    - Background: 100% transparent

$darkFull = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $p = $img.GetPixel($x, $y)
        $r = [int]$p.R
        $g = [int]$p.G
        $b = [int]$p.B
        $minVal = [Math]::Min($r, [Math]::Min($g, $b))
        $dist = 255 - $minVal

        if ($dist -le 12) {
            # White background -> transparent
            $darkFull.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $alpha = [Math]::Min(255, [int]($dist * 4))
            
            # Check if this pixel is part of the black "Sushi & Fusion" text (low R, low G, low B)
            # Text is in lower right: x > 1150 and y > 950
            if ($x -gt 1150 -and $y -gt 930 -and $r -lt 90 -and $g -lt 90 -and $b -lt 90) {
                # Turn black text into crisp ivory / gold #f5eedc
                $darkFull.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 245, 238, 220))
            } else {
                # Preserve orange/vermilion fish and KINGYO
                $darkFull.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            }
        }
    }
}

$darkFull.Save("assets/logo-kingyo-dark.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 2. Extract Wordmark for Header/Footer:
# Bounding box for KINGYO Sushi & Fusion:
# Let's crop tightly to the text
$cropX = 1210
$cropY = 820
$cropW = 710
$cropH = 240

$wordmarkBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$wordmarkGold = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $p = $darkFull.GetPixel($cropX + $x, $cropY + $y)
        $wordmarkBmp.SetPixel($x, $y, $p)
        
        # Gold version
        if ($p.A -gt 15) {
            $wordmarkGold.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 214, 173, 88))
        } else {
            $wordmarkGold.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$wordmarkBmp.Save("assets/logo-wordmark-dark.png", [System.Drawing.Imaging.ImageFormat]::Png)
$wordmarkGold.Save("assets/logo-wordmark-gold.png", [System.Drawing.Imaging.ImageFormat]::Png)

$darkFull.Dispose()
$wordmarkBmp.Dispose()
$wordmarkGold.Dispose()
$img.Dispose()
Write-Host "Dark mode assets created successfully!"
