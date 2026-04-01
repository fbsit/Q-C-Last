import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import type { CSSProperties } from "react";

type ImageProps = {
  width: number;
  layout?: ImageLayout;
  aspectRatio: AspectRatio;
  fit?: ImageFit;
} & Omit<NextImageProps, "height" | "width" | "fill">;

export function Image({ width, fit = "fill", aspectRatio, layout, ...nextImageProps }: ImageProps) {
  void layout;
  const height = calcAspectRatio(aspectRatio, width);
  return (
    <NextImage
      {...nextImageProps}
      width={width}
      height={height}
      style={{ objectFit: mapFit(fit), ...(nextImageProps.style ?? {}) }}
    />
  );
}

export type ImageFit = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';

export type AspectRatio =
  | '16:9'
  | '4:3'
  | '1:1'
  | '3:2'
  | '9:12'
  | '3:1'
  | '4:1'
  | '2:3';

export type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive';

const aspectRatioToRatio: Record<AspectRatio, number> = {
  '1:1': 1,
  '16:9': 9 / 16,
  '4:3': 3 / 4,
  '2:3': 3 / 2,
  '3:2': 2 / 3,
  '3:1': 1 / 3,
  '4:1': 1 / 4,
  '9:12': 12 / 9,
};

function calcAspectRatio(aspectRatio: AspectRatio, width: number): number {
  const ratio = aspectRatioToRatio[aspectRatio];

  return Math.floor(width * ratio);
}

function mapFit(fit: ImageFit): CSSProperties["objectFit"] {
  if (fit === "fill") return "fill";
  if (fit === "scale") return "contain";
  if (fit === "crop") return "cover";
  if (fit === "thumb") return "cover";
  return "contain";
}
