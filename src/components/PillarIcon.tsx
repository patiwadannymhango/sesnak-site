import { Cylinder, Droplets, Flame, Frame, Shield, Truck, Users, type LucideProps } from "lucide-react";
import type { Good, Pillar } from "../data/content";

const map: Record<Pillar["icon"], typeof Users> = {
  users: Users,
  flame: Flame,
  frame: Frame,
  truck: Truck,
};

export function PillarIcon({ icon, ...props }: { icon: Pillar["icon"] } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}

const goodsMap: Record<Good["icon"], typeof Users> = {
  shield: Shield,
  droplets: Droplets,
  cylinder: Cylinder,
};

export function GoodIcon({ icon, ...props }: { icon: Good["icon"] } & LucideProps) {
  const Icon = goodsMap[icon];
  return <Icon {...props} />;
}
