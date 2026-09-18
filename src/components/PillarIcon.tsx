import { Flame, Truck, Users, Wrench, type LucideProps } from "lucide-react";
import type { Pillar } from "../data/content";

const map: Record<Pillar["icon"], typeof Users> = {
  users: Users,
  flame: Flame,
  wrench: Wrench,
  truck: Truck,
};

export function PillarIcon({ icon, ...props }: { icon: Pillar["icon"] } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}
