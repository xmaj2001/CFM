import { Baby, Skull, UserPlus, CalendarPlus } from "lucide-react";
import { cn } from "@/lib/utils";

type NotificationType = "birth" | "death" | "new-member" | "event";

interface NotificationItemProps {
  type: NotificationType;
  title: string;
  description: string;
  time: string;
}

const notificationConfig = {
  birth: {
    icon: Baby,
    color: "hsl(var(--notification-birth))",
    bgColor: "hsl(var(--notification-birth) / 0.1)",
    label: "Nascimento"
  },
  death: {
    icon: Skull,
    color: "hsl(var(--notification-death))",
    bgColor: "hsl(var(--notification-death) / 0.1)",
    label: "Falecimento"
  },
  "new-member": {
    icon: UserPlus,
    color: "hsl(var(--notification-new-member))",
    bgColor: "hsl(var(--notification-new-member) / 0.1)",
    label: "Novo Membro"
  },
  event: {
    icon: CalendarPlus,
    color: "hsl(var(--notification-event))",
    bgColor: "hsl(var(--notification-event) / 0.1)",
    label: "Evento"
  }
};

const NotificationItem = ({ type, title, description, time }: NotificationItemProps) => {
  const config = notificationConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200 cursor-pointer group">
      {/* Icon */}
      <div
        className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: config.bgColor }}
      >
        <Icon className="h-5 w-5" style={{ color: config.color }} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <span
              className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
              style={{ backgroundColor: config.bgColor, color: config.color }}
            >
              {config.label}
            </span>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h4>
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
