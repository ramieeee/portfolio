import SvgProps from "@/interface/SvgProps";

export default function ProjectsIcon({
  width,
  height,
  color,
}: SvgProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>project</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill={color}
        fillRule="evenodd"
      >
        <g
          id="Combined-Shape"
          fill={color}
          transform="translate(64.000000, 34.346667)"
        >
          <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
        </g>
      </g>
    </svg>
  );
}
