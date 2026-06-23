import type { Route } from "./+types/test";

/**
 * 피보나치 수열을 재귀적으로 계산하는 함수
 * @param n 계산할 항의 순서 (0부터 시작)
 * @returns n번째 피보나치 수
 */
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function meta({}: Route.MetaFunction) {
  return [{ title: "Fibonacci Test" }];
}

export function loader({ request }: Route.LoaderArgs) {
  // 테스트를 위해 10번째 항까지의 수열을 계산하여 반로드
  const sequence = Array.from({ length: 11 }, (_, i) => fibonacci(i));
  return { sequence };
}

export default function FibonacciPage({ loaderData }: Route.ComponentProps) {
  const { sequence } = loaderData;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">피보나치 수열 재귀 테스트</h1>
      <div className="flex gap-2 flex-wrap">
        {sequence.map((num, index) => (
          <div
            key={index}
            className="p-3 bg-secondary text-secondary-foreground rounded-md border"
          >
            n={index}: <strong>{num}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
