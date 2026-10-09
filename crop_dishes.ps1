Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile((Resolve-Path "IMG_7766.JPEG"))
$w = $img.Width
$h = $img.Height

function Crop-Image($src, $rect, $outFile) {
    $bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
    $g.DrawImage($src, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $bmp.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Host "Cropped $outFile"
}

# Torre Kingyo: dish is in top right
# From visual inspection of IMG_7766: x ~ 2150..3750, y ~ 1650..3000
$cropTorre = New-Object System.Drawing.Rectangle(2100, 1650, 1650, 1400)
Crop-Image $img $cropTorre "assets/torre-kingyo-menu.jpg"

# Ensalada Neptuno: bowl in middle right
# x ~ 2000..3700, y ~ 2950..4250
$cropNeptuno = New-Object System.Drawing.Rectangle(2000, 2900, 1750, 1350)
Crop-Image $img $cropNeptuno "assets/ensalada-neptuno-menu.jpg"

# Sushi Burger: bottom
# x ~ 1700..3650, y ~ 4150..5350
$cropBurger = New-Object System.Drawing.Rectangle(1700, 4150, 1850, 1300)
Crop-Image $img $cropBurger "assets/sushi-burger-menu.jpg"

$img.Dispose()
Write-Host "All 3 menu dishes cropped from menu!"
