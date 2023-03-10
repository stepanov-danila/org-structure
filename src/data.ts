import { OrgSchemeItemType, TableGroupType } from "@orgStructure";
import { uniqueId } from "lodash";
import { TableHeadCol } from "./components/Table/TableHead";
import { TableSortByEnum } from "./enums";

export const department: OrgSchemeItemType = {
  id: uniqueId(),
  name: "Ирина Бармина",
  jobTitle: "Директор по персоналу",
  department: "Департамент по работе с персоналом",
  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
  items: [
    {
      id: "uniqueId1",
      name: "Ирина Бармина",
      jobTitle: "Директор по персоналу",
      department: "Отдел подбора персонала",
      avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
      items: [
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Заместитель руководителя отдела",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: "uniqueId2",
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          // department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: "uniqueId2",
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department:
                "Подбор персонала в Hard-направления (Ланит-Интеграция, ЛАН-АТМ Сервис, Лантер, Ланит-Технологии)",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: "uniqueId1",
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
          ],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
      ],
    },
    {
      id: uniqueId(),
      name: "Ирина Бармина",
      jobTitle: "Директор по персоналу",
      department: "Департамент по работе с персоналом",
      avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
      items: [
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
              ],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: uniqueId(),
      name: "Ирина Бармина",
      jobTitle: "Директор по персоналу",
      department: "Департамент по работе с персоналом",
      avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
      items: [
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
              ],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
          ],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
      ],
    },
    {
      id: uniqueId(),
      name: "Ирина Бармина",
      jobTitle: "Директор по персоналу",
      department: "Департамент по работе с персоналом",
      avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
      items: [
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
              ],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
          ],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
      ],
    },
    {
      id: uniqueId(),
      name: "Ирина Бармина",
      jobTitle: "Директор по персоналу",
      department: "Департамент по работе с персоналом",
      avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
      items: [
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
                {
                  id: uniqueId(),
                  name: "Ирина Бармина",
                  jobTitle: "Директор по персоналу",
                  department: "Департамент по работе с персоналом",
                  avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
                  items: [],
                },
              ],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
            {
              id: uniqueId(),
              name: "Ирина Бармина",
              jobTitle: "Директор по персоналу",
              department: "Департамент по работе с персоналом",
              avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
              items: [],
            },
          ],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
        {
          id: uniqueId(),
          name: "Ирина Бармина",
          jobTitle: "Директор по персоналу",
          department: "Департамент по работе с персоналом",
          avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
          items: [],
        },
      ],
    },
  ],
};

export const tableGroups: TableGroupType[] = [
  {
    id: uniqueId(),
    group: "Группа Travel-поддержки",
    items: [
      {
        id: uniqueId(),
        name: "Волков Игорь Михайлович",
        avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
        department: "Группа Travel-поддержки",
        positionRole: {
          position: "Руководитель направления по организации деловых поездок",
          role: "Руководитель отдела",
        },
        items: [
          {
            id: uniqueId(),
            name: "Котвицкая Елена Анатольевна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Группа Travel-поддержки 1",
            positionRole: {
              position: "Менеджер",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Михайлова Анна Артёмовна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Группа Travel-поддержки 2",
            positionRole: {
              position:
                "Асситсент руководителя направления по организации деловых поездок",
            },
            items: [],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    group: "Отдел кадров",
    items: [
      {
        id: uniqueId(),
        name: "Кузьмина Наталия Сергеева",
        avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
        department: "Отдел кадров",
        positionRole: {
          position: "Руководитель отдела",
          role: "Полный спектр кадровых вопросов, взаимодействие с руководителями и HR, отсрочка от армии для IT-специалистов, консультирование по трудовому законодательству",
        },
        items: [
          {
            id: uniqueId(),
            name: "Волочкова Анастасия Андреевна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Менеджер по персоналу",
              role: "Оформление приема на работу, заключение трудовых договоров, оформление иностранных работниках в различных ведомствах",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Гончарова Анна Андреевна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Специалист направления 'Страхование'",
              role: "Сопровождение договоров ДМС, взаимодействие со страховой компанией, страование родственников",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Громыхалина Дарья Викторовна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Младший менеджер по персоналу",
              role: "Оформление командировок, отпусков, различных справок, подготовка документов по запросам работников",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Гурова Евгения Александровна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Старший менеджер по персоналу",
              role: "Сопровождение договоров ЗП проектов, работа с банковскими реквизитами сотрудников, оформление СНИЛС",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Егорова Мария",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Бизнес-архитектор",
              role: "Сопровождение SAP ",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Капитанова Вероника Валерьевна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Руководитель группы оформления",
              role: "Оформление приема на работу, взаимодействие с подразделениями по нестандартым трудовым отношениям",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Лосовская Мария Михайловна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Менеджер по персоналу",
              role: "Оформление всех видов отпусков, больничных листов, командировок",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Макарова Кристина Михайловна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Менеджер по персоналу",
              role: "Оформление личных дел работников, ведение трудовых книжек, выпуск карт IRG, оформление пропусков в здание, ключница",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Рыжкова (Еремина) Виктория Вячеславовна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Старший менеджер по персоналу",
              role: "Оформление командировок, работа со срочными трудовыми договорами, ведение внутренней отчетности",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Терентьева Анна Александровна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Старший менеджер по персоналу",
              role: "Оформление всех видов командировок, внесение изменений в персональные данные работников, работа с MyLanit",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Токарчук Дарья Вячеславовна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Заместитель руководителя отдела",
              role: "Полный спектр кадровых вопросов, оформление переводов, взаимодействие с подразделениями по оплате труда",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Швецова Мария Сергеевна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Ведущий менеджер по персоналу",
              role: "Оформление увольнений, работа с обходными листами, взаимодействие с ПФ РФ и сдача ежедневной отчетности, подготовка ответов на запросы работников",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Шилова Людмила Олеговна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Руководитель направления 'Страхование'",
              role: "Ведение ДМС, курирование работы страховой компании",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Юрина Екатерина Александровна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Ведущий менеджер по персоналу",
              role: "Оформление декретов, отпусков по уходу за ребенком, приказов на обучение, ведение штатных расписаний",
            },
            items: [],
          },
          {
            id: uniqueId(),
            name: "Яльцева Динара Шамилевна",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Старший менеджер по персоналу",
              role: "Оформление приема на работу, заключение трудовых договоров, внесение изменений в персональные данные работника",
            },
            items: [],
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Шульц Александра Владимировна",
        avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
        department: "Отдел кадров",
        positionRole: {
          position: "Руководитель отдела",
          role: "Руководитель отдела",
        },
        items: [
          {
            id: uniqueId(),
            name: "Имя",
            avatarUrl: "https://i.ibb.co/gDsGD70/avatar-16.png",
            department: "Отдел кадров",
            positionRole: {
              position: "Должность",
              role: "Роль",
            },
            items: [],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    group: "Отдел обучения и развития",
    items: [],
  },
  {
    id: uniqueId(),
    group: "Отдел подбора персонала",
    items: [],
  },
];

export const tableHeadCols: TableHeadCol[] = [
  {
    title: "ФИО",
    type: TableSortByEnum.Name,
  },
  {
    title: "Подразделение",
    type: TableSortByEnum.Department,
  },
  {
    title: "Должность, роль",
    type: TableSortByEnum.PositionRole,
  },
];
