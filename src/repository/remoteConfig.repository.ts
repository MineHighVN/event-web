import { AppVersionModel } from "@/models/version.model";
import apiClient from "./api/apiClient";

export interface IRemoteConfigRepository {
  getWindowsLatestVersion(): Promise<AppVersionModel>;
}

class RemoteConfigRepository {
  private static instance: RemoteConfigRepository;

  private constructor() {}

  public static getInstance(): RemoteConfigRepository {
    if (!RemoteConfigRepository.instance) {
      RemoteConfigRepository.instance = new RemoteConfigRepository();
    }

    return RemoteConfigRepository.instance;
  }

  public static setMockInstance(mock: RemoteConfigRepository) {
    RemoteConfigRepository.instance = mock;
  }

  async getWindowsLatestVersion(): Promise<AppVersionModel> {
    const res = await apiClient.get(
      "https://raw.githubusercontent.com/MineHighVN/zeltalive-notify/refs/heads/main/data.json",
    );

    return res.data;
  }
}

export default RemoteConfigRepository;
