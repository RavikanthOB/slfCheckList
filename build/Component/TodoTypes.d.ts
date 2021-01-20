export interface todoItem {
    Id: string;
    name: string;
    isSelected: boolean;
    updateBy: user;
}
export interface TodoProps {
    list: todoItem[];
    onChange: (list: todoItem[]) => void;
    currentUser: user;
}
export interface user {
    name: string;
    profilePic: string;
}
export interface todoItemProps {
    item: todoItem;
    onClick: (id: string) => void;
}
