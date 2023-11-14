#!/bin/bash

# Directory containing the images
image_dir="external_headers"
image_dir="."

image_arr=("$image_dir"/*)

# Loop through each file in the directory
for file in ${image_arr[@]}
do
    # Extract the base name and extension
    base_name=$(basename "$file")
    extension="${base_name##*.}"
    base_name="${base_name%.*}"

    # New file names
    backup_file="backup-$base_name.$extension"
    new_file="$base_name.png"

    # Rename the file to prefix with 'backup-'
    mv "$file" "$image_dir/$backup_file"

    # Get image dimensions
    dimensions=$(identify -format "%wx%h" "$image_dir/$backup_file")
    width=$(echo $dimensions | cut -d'x' -f1)
    height=$(echo $dimensions | cut -d'x' -f2)

    # Calculate new height to maintain a 2x1 aspect ratio
    new_height=$((width / 2))

    # Crop and resize the image to a 2x1 aspect ratio, centered
    convert "$image_dir/$backup_file" -gravity north -crop ${width}x${new_height}+0+0 +repage -resize "2000x1000>" -quality 70 "$image_dir/$new_file"

    # Compress the PNG image
    pngquant "$image_dir/$new_file" --ext .png --force
done
