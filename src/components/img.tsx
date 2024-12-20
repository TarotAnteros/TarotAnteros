import { css } from "@/generated/styled-system/css";
import ExportedImageRemote from "next-export-optimize-images/remote-image";
import ExportedImageLocal from "next-export-optimize-images/image";
import { ComponentProps } from "react";
type ImageProps = ComponentProps<typeof ExportedImageRemote>;

export function LocalImg(props: ImageProps) {
  return (
    <ExportedImageLocal
      {...props}
      className={css({
        objectFit: "cover",
        width: "100%",
        height: "100%",
      })}
    />
  );
}

export function RemoteImg(props: ImageProps) {
  return (
    <ExportedImageRemote
      {...props}
      className={css({
        objectFit: "cover",
        width: "100%",
        height: "100%",
      })}
    />
  );
}
